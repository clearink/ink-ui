import { presetStatus } from '@comps/_shared/constants'
import { withDefaults } from '@comps/_shared/utils'
import { isPromiseLike, nextTick, noop } from '@internal/utils'
import React from 'react'
import { createRoot } from 'react-dom/client'

import type { NotificationHolderRef } from '../components/holder/props'
import type { NotificationConfig, NotificationMethods } from '../props'

import NotificationHolder from '../components/holder'
import { defaultNotificationConfig } from '../props'

// 全局的通知提醒实例
class GlobalNotificationInstance {
  private holder: NotificationHolderRef | null = null

  private flushCleanup = noop

  private queue: ((holder: NotificationHolderRef) => void)[] = []

  globalConfig: NotificationConfig = { ...defaultNotificationConfig }

  private _ensure = () => {
    if (this.holder) return this.holder

    return new Promise<NotificationHolderRef>((resolve) => {
      createRoot(document.createDocumentFragment()).render(
        <React.StrictMode>
          <NotificationHolder ref={(holder) => {
            if (!this.holder) this.holder = holder
            if (this.holder) resolve(this.holder)
          }}
          />
        </React.StrictMode>,
      )
    })
  }

  private flush = () => {
    this.flushCleanup()

    this.flushCleanup = nextTick(() => {
      const result = this._ensure()

      const handler = (holder: NotificationHolderRef) => {
        holder.sync()

        this.queue.forEach((fn) => { fn(holder) })

        this.queue = []
      }

      isPromiseLike(result) ? result.then(handler) : handler(result)
    })
  }

  private open: NotificationMethods['open'] = (props) => {
    this.queue.push((holder) => { holder.open(props) })

    this.flush()
  }

  private close: NotificationMethods['close'] = (key) => {
    this.queue.push((holder) => { holder.close(key) })

    this.flush()
  }

  private config = (config: NotificationConfig) => {
    this.globalConfig = withDefaults(config, this.globalConfig)

    this.holder?.sync()
  }

  inject = () => {
    const statusMethods = presetStatus.reduce((methods, status) => {
      methods[status] = (props) => { this.open({ ...props, type: status }) }

      return methods
    }, {} as Omit<NotificationMethods, 'close' | 'open'>)

    return { open: this.open, close: this.close, config: this.config, ...statusMethods }
  }
}

export default new GlobalNotificationInstance()

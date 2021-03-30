import React, { useEffect, useRef } from 'react';
import "./item.css";

export interface ToastProps {
  id: string,
  duration: number,
  onClose?: (id: string, isShowMask: boolean) => any,
  isShowMask: boolean,
  text: string,
  type: 'info' | 'warning' | 'danger'
}

export default function ToastItem(props: ToastProps) {
  const {id, duration, onClose, isShowMask, text} = props
  const tiemr = useRef<NodeJS.Timeout>()
  tiemr.current = setTimeout(() => {
    onClose && onClose(id, isShowMask)
  }, duration)

  useEffect(() => {
    return () => {
      // @ts-ignore
      clearTimeout(tiemr.current)
    }
  }, [])

  return (
    <div className="toast-item">{text}</div>
  )
}
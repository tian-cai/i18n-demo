export const dateTimeFormats = {
  'zh': {
    short: {
      year: 'numeric', month: '2-digit', day: '2-digit',
    }
  },
  'en': {
    short: {
      year: 'numeric', month: '2-digit', day: 'numeric',weekday:'long'
    }
  }
}

export const numberFormats = {
  'zh': {
    currency: {
      style: 'currency',currency:'CNY'
    }
  },
  'en': {
    currency: {
      style: 'currency',currency:'USD',minimumFractionDigits:3
    }
  }
}
import moment from 'moment'
const dateFormat = (date, time, defaultText) => {
  if (date === 'present') return 'по настоящее время'
  const lang = 'ru'
  const dateTime = moment(date).locale('ru').format('DD MMM YYYY, HH:mm')
  return (date && time) ? dateTime : (date) ? moment(date).locale(lang).format('DD MMM YYYY') : defaultText
}

export default dateFormat

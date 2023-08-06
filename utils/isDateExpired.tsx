export const isDateExpired = (endDay: string) => {
  const currentDate = new Date()
  const endDayDate = new Date(endDay)
  return endDayDate >= currentDate
}

const timestampToDate = (createdAt) => {
  const [date] = createdAt.split('T');
  const [year, month, day] = date.split('-');
  return `${day}.${month}.${year}`;
};

const goalsListSubmitAdapter = (data) =>
  data.map(({ _id, createdAt, title, duration, description }) => ({
    id: _id,
    date: timestampToDate(createdAt),
    time: duration,
    text: title,
    note: description,
  }));

export default goalsListSubmitAdapter;

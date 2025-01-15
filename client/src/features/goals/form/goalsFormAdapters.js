const goalsFormSubmitAdapter = ({ text, time, note }) => ({
  title: text,
  duration: time,
  description: note,
});

export default goalsFormSubmitAdapter;

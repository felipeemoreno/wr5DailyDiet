export default (date: Date) =>
  date.toLocaleTimeString('pt-BR', {
    dateStyle: undefined,
    hour: '2-digit',
    minute: '2-digit',
  });

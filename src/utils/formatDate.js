const formatDate = (hour) => {
  return Intl.DateTimeFormat('br-BR', {
    // year: 'numeric',
    // month: 'numeric',
    // day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZone: 'America/Sao_Paulo',
  }).format(new Date(hour));
};

export default formatDate;

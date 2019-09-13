const apiMonitor = response => {
  response.ok
    ? console.log(
        '%c API_RESPONSE! %c' + response.config.url,
        'background: #222; color: #bada55; font-size:16px',
        'background:red;color:white;',
      )
    : console.log(
        '%c API_RESPONSE! %c' + response.config.url,
        'background: #222; color: #ff7788; font-size:16px',
        'background:red;color:white;',
      );
  console.log(response.data);
};

export default apiMonitor;

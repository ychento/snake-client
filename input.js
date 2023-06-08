let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn;


  return stdin;
};

const handleUserInput = function (data) {
  console.log(data);

  if (data === '\u0003') {
    // If the user presses Ctrl+C (Unicode character \u0003), exit the program
    process.exit();
  };

  if (data === 'k') {
    // Send a message to the server when 'w' key is pressed
    connection.write("Say: Hello, everyone! It is a smoky day!");

  switch (data) {
    case 'w':
      connection.write('Move: up');
      break;
    case 'a':
      connection.write('Move: left');
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'd':
      connection.write('Move: right');
      break;
  };


};

module.exports = { setupInput };
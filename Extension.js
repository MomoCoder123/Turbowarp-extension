class HelloWorld {
  getInfo() {
    return {
      id: 'helloworld',
      name: 'It works!',
      blocks: [
        {
          opcode: 'pi',
          blockType: Scratch.BlockType.REPORTER,
          text: '𝝿!'
        },
        {
          opcode: "alert",
          blockType: Scratch.BlockType.COMMAND,
          text: "alert[TEXT]",
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "hello world!"
            }
          }
        }
      ]
    };
  }

  pi() {
    return 3.141592653589793238;
  }
}

Scratch.extensions.register(new HelloWorld());

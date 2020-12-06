// See https://github.com/takefumi-yoshii/hygen-sanbox/blob/main/.hygen/new/fc/index.js

module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'input',
        name: 'function_name',
        message: 'What is the name of function?',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const abs_path = 'src/utils';
      return { ...answers, abs_path };
    });
  },
};

module.exports = function(plop) {
	plop.setGenerator('my-component', {
	  description: 'Create a new React component with CSS',
	  prompts: [
		{
		  type: 'input',
		  name: 'name',
		  message: 'What is the name of the component?',
		},
	  ],
	  actions: [
		{
		  type: 'add',
		  path: './src/components/{{properCase name}}/index.tsx',
		  templateFile: 'plop-templates/myComponent.hbs',
		},
		{
		  type: 'add',
		  path: './src/components/{{properCase name}}/style.css',
		  templateFile: 'plop-templates/style.css.hbs',
		},
	  ],
	});
  };
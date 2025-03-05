import inquirer from 'inquirer';
import { Message, MessageVariant } from './Message';
import { UsersData } from './UsersData';

enum Action {
  List = "list",
  Add = "add",
  Edit = 'edit',
  Remove = "remove",
  Quit = "quit"
}

type InquirerAnswers = {
  action: Action
}

const startApp = () => {
  inquirer.prompt([{
    name: 'action',
    type: 'input',
    message: 'How can I help you?',
  }]).then(async (answers: InquirerAnswers) => {
    switch (answers.action) {
      case Action.List:
        users.showAll();
        break;
      case Action.Add:
        const user = await inquirer.prompt([{
          name: 'name',
          type: 'input',
          message: 'Enter name',
        }, {
          name: 'age',
          type: 'number',
          message: 'Enter age',
        }]);
        users.add(user);
        break;
        case Action.Edit:
          const orgName = await inquirer.prompt([{
            name: 'name',
            type: 'input',
            message: 'Enter the name of the person you wish to edit ',
          }]);
          const edit = await inquirer.prompt([{
            name: 'name',
            type: 'input',
            message: 'Enter new name (Enter to skip)',
          }, {
            name: 'age',
            type: 'number',
            message: 'Enter new age (Enter to skip)',
          }]);
          users.edit(orgName.name, edit);
        break;
      case Action.Remove:
        const name = await inquirer.prompt([{
          name: 'name',
          type: 'input',
          message: 'Enter name',
        }]);
        users.remove(name.name);
        break;
      case Action.Quit:
        Message.showColorized(MessageVariant.Info, "Bye bye!");
        return;
      default:
        Message.showColorized(MessageVariant.Error, 'Command not found')
    }

    startApp();
  });
}

const users = new UsersData();

users.add({ name: "Jan", age: 20 });
users.add({ name: "Adam", age: 30 });
users.add({ name: "Kasia", age: 23 });
users.add({ name: "Basia", age: -6 });

console.log("\n");
console.info("???? Welcome to the UsersApp!");
console.log("====================================");
Message.showColorized(MessageVariant.Info, "Available actions");
console.log("\n");
console.log("list – show all users");
console.log("add – add new user to the list");
console.log("edit – edit user");
console.log("remove – remove user from the list");
console.log("quit – quit the app");
console.log("\n");

startApp();

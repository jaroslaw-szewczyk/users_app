import { Message, MessageVariant } from "./Message";

interface Users {
  name: string,
  age: number
}

export class UsersData {
  private data: Users[] = [];

  public showAll() {
    if(this.data.length === 0){
      console.log('No data...');
    } else {
      console.table(this.data);
    }
  }

  public add(user: {name: string, age: number}) {
    if(typeof user.name === 'string' 
      && user.name.length > 0
      && typeof user.age === 'number'
      &&  user.age > 0
    ) {
      this.data.push(user);
      Message.showColorized(MessageVariant.Success, 'User has been successfully added!');
    } else {
      Message.showColorized(MessageVariant.Error, 'Wrong data!');
    }
  }

  public remove(name: string) {
    const index = this.data.findIndex(item => item.name === name);
    if(index !== -1) {
      this.data.splice(index, 1);
      Message.showColorized(MessageVariant.Success, 'User deleted!')
    } else {
      Message.showColorized(MessageVariant.Error, 'User not found...');
    }
  }

  public edit(name: string, newData: { name?: string, age?: number }) {
    const user = this.data.find(item => item.name === name);
    console.log(user);
  
    if (user) {
      if (newData.name && newData.name.trim() !== '') {
        user.name = newData.name;
        Message.showColorized(MessageVariant.Success, 'Name updated!');
      } else if (newData.name === '') {
        Message.showColorized(MessageVariant.Error, 'Name cannot be empty or just spaces!');
      }
  
      if (newData.age !== undefined && newData.age > 0) {
        user.age = newData.age;
        Message.showColorized(MessageVariant.Success, 'Age updated!');
      } else if (newData.age !== undefined && newData.age <= 0) {
        Message.showColorized(MessageVariant.Error, 'Age must be greater than 0!');
      }
    } else {
      Message.showColorized(MessageVariant.Error, 'User not found...');
    }
  }
}
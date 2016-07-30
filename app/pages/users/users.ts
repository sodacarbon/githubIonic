import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import GithubUsers provider
import {GithubUsers} from '../../providers/github-users/github-users';
// Import User model
import {User} from "../../models/user";
import {UserDetailsPage} from "../user-details/user-details"; // added by WS suggestion
/*
  Generated class for the UsersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/users/users.html',

  // Add the GithubUsers provider as part of our page component
  providers: [GithubUsers]
})
export class UsersPage {
  // Declare users as an array of User model
  users: Array<User>;

  // Inject the GithubUsers in the constructor of our page component
  // We've added a private key word to the githubUsers in the cnstructor where it is injected as a parameter. This makes the property to be available within the class and be accessible with the this keyword.
  constructor(public nav: NavController, private githubUsers: GithubUsers) {
    // Test whether the github provider returns data
    githubUsers
      .load()
      .then(users => this.users = users);

    // Test if our search function works.
    // quit/ionic serv > Successfully returns array[30] *soda*
    /* githubUsers
      .searchUsers('soda')
      .then(users => console.log(users)); */
  }

  // We then add a method that will handle the navigation, goToDetails. It takes in two arguments, the event, just in case we want to do something with the event that triggered the navigation, and the login(username).
  // Ionic 2 treats navigation as a stack, meaning pages are added on top of each other. That is why you see the this.nav.push, and we push a page into the navigation stack. Going back or pressing the back button is like popping the last element in the stack (Last In First Out). The second parameter of the push is the object we wish to pass to the next page.
  //
  // Navigate to user details page with the login as a parameter
  goToDetails(event, login) {
    this.nav.push(UserDetailsPage, { login: login});
  }

  // Search for user's from github
  // Handle input event from search bar
  search(searchTerm) {
    let term = searchTerm.target.value;
    // We will only perform the search if we have 3 or more characters
    if (term.trim() == '' || term.trim().length < 3) {
      // Get github users and assign to local user's variable
      this.githubUsers.load()
      // Load original users in this case
        .then(users => this.users = users);
    }
    else {
      // Get the searched users from github
      this.githubUsers.searchUsers(term)
        .then(users => this.users = users);
    }
  }
}

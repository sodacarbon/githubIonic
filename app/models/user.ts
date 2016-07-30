/**
 * Created by Sidney on 7/30/2016.
 */
/*
 // https://api.github.com/users
 {
 "login": "mojombo",
 "id": 1,
 "avatar_url": "https://avatars.githubusercontent.com/u/1?v=3",
 "gravatar_id": "",
 "url": "https://api.github.com/users/mojombo",
 "html_url": "https://github.com/mojombo",
 "followers_url": "https://api.github.com/users/mojombo/followers",
 "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
 "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
 "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
 "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
 "organizations_url": "https://api.github.com/users/mojombo/orgs",
 "repos_url": "https://api.github.com/users/mojombo/repos",
 "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
 "received_events_url": "https://api.github.com/users/mojombo/received_events",
 "type": "User",
 "site_admin": false
 }

 // https://api.github.com/users/mojomo
 {
 "login": "mojombo",
 "id": 1,
 "avatar_url": "https://avatars.githubusercontent.com/u/1?v=3",
 "gravatar_id": "",
 "url": "https://api.github.com/users/mojombo",
 "html_url": "https://github.com/mojombo",
 "followers_url": "https://api.github.com/users/mojombo/followers",
 "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
 "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
 "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
 "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
 "organizations_url": "https://api.github.com/users/mojombo/orgs",
 "repos_url": "https://api.github.com/users/mojombo/repos",
 "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
 "received_events_url": "https://api.github.com/users/mojombo/received_events",
 "type": "User",
 "site_admin": false,
 "name": "Tom Preston-Werner",
 "company": null,
 "blog": "http://tom.preston-werner.com",
 "location": "San Francisco",
 "email": "tom@mojombo.com",
 "hireable": null,
 "bio": null,
 "public_repos": 60,
 "public_gists": 62,
 "followers": 19492,
 "following": 11,
 "created_at": "2007-10-20T05:24:19Z",
 "updated_at": "2016-07-29T10:16:42Z"
 }
*/
// User model based on the structure of github api at
// https://api.github.com/users/{username}
export class User {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

# yieldify-tech-test

 - Whenever the user clicks on the page, a circle is 'fired' from the clicked position at a random speed and angle.
 - When the projectile reaches the bottom of the browser window it should bounce until it stops.

## How to run

- `git clone https://github.com/StuBehan/yieldify-tech-test.git`
- change to the directory you cloned to
- `npm install`
- `npm start`
- navigate to the displayed url (default `http://127.0.0.1:8081`)

## Implementation

- Javascript & HTML 
- Use canvas from vanillia JS.

### Relationships

|displayArea| 1 ------------ * |ball|
|    ---       |-----| ----    |
|balls array||ball diameter|
|canvas html element||ball location x/y|
|||ball velocity x/y|
|||gravity|
|||colour?|

## 


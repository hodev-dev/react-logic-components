# React Logic Components

# install
**no need to use npm** just copy `src/Logics` folder drop into react project because it has `Zero` dependecy
## IF Component
render jsx if variable and check return `<THEN>` base on given logic otherwise return `<ELSE>`
if there is no `<ELSE>` return null
```js
import IF, { THEN, ELSE } from './Logics/IF';
```
```html
<IF variable={true} logic="===" check={true}>
    <THEN>
        do something
    </THEN>
    <ELSE>
        do something else
    </ELSE>
</IF>
```
# SWITCH Component
render if case equal to variable if didn't find any case it will render default
```js
import SWITCH, { CASE, DEFAULT } from './Logics/Switch';
```
```html
<SWITCH variable={'hosein'}>
    <CASE case="ali">render ali</CASE>
    <CASE case="reza">render reza</CASE>
    <DEFAULT>render if no casee found</DEFAULT>
</SWITCH>
```
# FOREACH Component
map over data and inject each data `as` props with given name into component 
```js
import FOREACH from './Logics/ForEach';
```
```html
<FOREACH data={['red', 'blue', 'green']} as={"color"}>
    <H1 color />
</FOREACH>
```

# Performance
there may be some performance overhead but i didn't notice anything noticable because react is slow by default on render more than 100 element at same time and it considered to be bad practice (virtualized list) for less than that it should be fine
## Getting / Setting

### `v-model`

The most common use case for vue-select is to have the chosen value synced with a parent component. vue-select 
takes advantage of the `v-model` syntax to sync values with a parent. The `v-model` syntax works with
primitives and objects. 

```html
<v-select v-model="selected" />
```

Note that when using the `multiple` prop, the `v-model` value will always be an array.

### Props and Events

Sometimes `v-model` might not fit your use case. For example, when working with [Vuex](https://vuex.vuejs.org),
you'll need to trigger a mutation rather than mutating a value directly. In that case, maybe you need
to bind a pre-selected value, and trigger a mutation when it changes. 

vue-select exposes the `value` prop and an `input` event to enable this. This combo of props and 
events is also how Vue wires up the `v-model` syntax internally.

#### Prop: `value`

The `value` prop lets vue-select know what value is currently selected. It will accept strings, 
numbers or objects. If you're using a `multiple` v-select, you'll want to pass an array. 

```html
<v-select :value="selected" />
```

::: tip 🤓
Anytime you bind the `value` prop directly, you're responsible for updating the bound variable
in your code using the `@input` event.
:::

#### Event: `input`

The `input` event is triggered anytime the value state changes, and is emitted with the `value`
state as it's only parameter.

#### Vuex Support

The `value` prop and `emit` event are very useful when using a state management tool, like Vuex. 
You can bind the selected value with `:value="$store.myValue"`, and use the `input` event to
trigger a mutation, or dispatch an action – or anything else you might need to do when the selection
changes.

```html
<v-select :value="$store.myValue" @input="setSelected" />
```

```js
methods: {
  setSelected(value) {
     //  trigger a mutation, or dispatch an action  
  }
}
```
## Transforming Selections

When the `options` array contains objects, vue-select returns the whole object as dropdown value upon selection.

If you need to return a single key, or transform the data before it is synced, vue-select provides a `reduce` callback
 that allows you to transform a selected option before it is passed to the `@input` event. Consider this data structure:
 
 ```js
 let options = [{code: 'CA', country: 'Canada'}, ...];
 ```
 
 If we want to display the `country`, but return the `code` to `v-model`, we can use the `reduce` prop to receive
 only the data that's required.
 
 ```html
 <v-select :options="options" :reduce="country => country.code" label="country" />
 ```
 
The `reduce` property also works well when you have a deeply nested value:
 
 ```
 {
   country: 'canada',
   meta: {
     id: '1',
     code: 'ca'
   }
 }
 ```
 
 ```html
 <v-select :options="options" :reduce="country => country.value.id" label="country" />
 ```
 
 <reducer-nested-value />

## Single/Multiple Selection

By default, vue-select supports choosing a single value. If you need multiple values, use the `multiple` boolean prop,
much the same way you would on a native `<select>` element. When `multiple` is true, `v-model` or `value` should be
arrays.
 

```html
<v-select multiple v-model="selected" :options="['foo','bar']" />
```
<v-select multiple :options="['foo','bar']" />

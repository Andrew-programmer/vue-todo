<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">+</button>
    </form>
</template>

<script>
  export default {
      name: 'AddTodo',
      data() {
          return {
              title: ''
          }
      },
      methods: {
          onSubmit() {
              if (this.title.trim()) {
                  const newTodo = {
                      id: Date.now(),
                      title: this.title,
                      completed: false
                  }

                  this.$emit('add-todo', newTodo);
                  this.title = '';
              }
          }
      },
  }
</script>

<style scoped>
  form{
      display: flex;
      justify-content: space-between;
  }

  input{
      width: 100%;
      padding: .3rem;
  }

  button {
      background: greenyellow;
      font-weight: bold;
      border: none;
      font-size: 1rem;
      padding: .6rem;
      color: black;
  }

  button:hover {
      transition: .2s ease;
      cursor: pointer;
      background: white;
      outline: 1px solid greenyellow;
  }
</style>

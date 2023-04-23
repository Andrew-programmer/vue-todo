<template>
    <ul>
        <TodoItem
                v-for="todoItem of todos"
                :todo-item="todoItem"
                @remove-todo="removeTodo"
        />
    </ul>
</template>

<script>

import TodoItem from "@/components/TodoItem.vue";

export default {
    name: 'TodoList',
    props: {
        todos: {
            type: Array,
            required: true
        },
    },
    methods: {
        removeTodo(id) {
            this.$emit('remove-todo', id);
        }
    },
    components: {
        TodoItem,
    }
}

</script>

<style scoped>
ul {
    padding: 0;
    margin: 0;
    list-style: none;
}
</style>

<template>
    <router-link to="/">Go to Home</router-link>
    <hr/>
    <div class="action-area">
        <AddTodo
            @add-todo="addTodo"
        />
        <select v-model="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not completed</option>
        </select>
        <DeleteAllCompleted
            :todos="todos"
            @delete-all-completed="onDeleteCompleted"
        />
    </div>
    <hr>
    <Loader v-if="loading"/>
    <TodoList
            v-else-if="filteredTodos.length"
            :todos="filteredTodos"
            @remove-todo="removeTodo"
    />
    <p v-else>
        No todos!
    </p>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import Loader from "@/components/Loader.vue";
import DeleteAllCompleted from "@/components/DeleteAllCompleted.vue";

export default {
    name: 'App',
    data() {
        return {
            todos: [],
            loading: true,
            filter: 'all'
        }
    },
    computed: {
        filteredTodos() {
            switch (this.filter) {
                case 'completed':
                    return this.todos.filter(todo => todo.completed);
                case 'not-completed':
                    return this.todos.filter(todo => !todo.completed);
                default:
                    return this.todos;
            }
        }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => response.json())
            .then(json => {
                setTimeout(() =>{
                    this.todos = json;
                    this.loading = false;
                }, 200)
            })
    },
    methods: {
        removeTodo(id) {
            this.todos = this.todos.filter(item => item.id !== id);
        },
        addTodo(newTodo) {
            this.todos.unshift(newTodo);
        },
        onDeleteCompleted(newTodos) {
            this.todos = newTodos;
        },
    },
    components: {
        DeleteAllCompleted,
        TodoList,
        AddTodo,
        Loader
    }
}
</script>

<style scoped>
    select{
        padding: 0.2rem;
        width: 100%;
    }

    .action-area{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 7rem;
    }
</style>

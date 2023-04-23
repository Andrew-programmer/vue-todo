<template>
    <li>
        <input type="checkbox"
               @change="todoItem.completed = !todoItem.completed"
               :checked="todoItem.completed"
        >
        <span
                :class="{
            completed: todoItem.completed
          }"
        >
            {{ todoItem.title  }}
        </span>
        <button
                class="deleteButton"
                @click="removeTodo(todoItem.id)"
        >&times;
        </button>
    </li>
</template>

<script>

export default {
    name: 'TodoItem',
    data() {
        return {}
    },
    methods: {
        removeTodo(id) {
            this.$emit('remove-todo', id);
        }
    },
    props: {
        todoItem: {
            type: Object,
            required: true
        },
    },
}

</script>

<style scoped>
li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
}

.deleteButton {
    background: red;
    color: #fff;
    border-radius: 50%;
    font-weight: bold;
    border: none;
}

.deleteButton:hover {
    transition: .2s ease;
    cursor: pointer;
    background: white;
    color: black;
    outline: 1px solid red;
}

.completed {
    text-decoration: line-through;
}
</style>

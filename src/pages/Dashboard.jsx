import React from "react";
import TodoList from "../components/todo/TodoList";
function Dashboard(props) {
    return (
        <div className="bg-slate-400 w-screen h-screen">
            <TodoList />
        </div>
    );
}; 
export default Dashboard;
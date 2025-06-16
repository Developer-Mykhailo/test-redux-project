import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction("tasks/addtasks");

export const deleteTask = createAction("tasks/deleteTask");

export const toggleCompleted = createAction("tasks/toggleCompleted");

export const setStatusFilter = createAction("filters/setStatusFilter");

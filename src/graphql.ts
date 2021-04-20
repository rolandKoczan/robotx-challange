
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Child {
    _id: string;
    name: string;
    parent: Parent;
}

export interface IQuery {
    parents(): Parent[] | Promise<Parent[]>;
    parent(id: string): Parent | Promise<Parent>;
    children(): Child[] | Promise<Child[]>;
    child(id: string): Child | Promise<Child>;
}

export interface Parent {
    _id: string;
    name: string;
    children?: Child[];
}

export interface A extends Child {
    _id: string;
    name: string;
    parent: Parent;
    foo: string;
}

export interface B extends Child {
    _id: string;
    name: string;
    parent: Parent;
    bar: string;
}

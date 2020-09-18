#!/usr/bin/env node
const Table = require('cli-table');
const fs = require('fs')
//Can't make shelljs to work 
//const shell = require('shelljs')

const table = new Table(
    { 
        head: ['Pod Name', 'Namespace', 'CPU Request', 'CPU Limits', 'Memory Request','Memory Limits'],
        chars: {'mid': '', 'left-mid': '', 'mid-mid': '', 'right-mid': ''},
        style: { head: ['green'] }
    });

var content = fs.readFileSync('k8-resources.txt').toString('utf-8').split(",");
//var data=shell.exec("kubectl get pods -o=jsonpath='{range.items[*]}{.metadata.name}{","}{.metadata.namespace}{","}{end}' -n core-admin-si", {silent:true}).stdout
    for (i = 0; i < content.length-1; i+=6) {
        
        var tmp=i

        table.push([content[tmp], content[tmp+1],content[tmp+2],content[tmp+3],content[tmp+4],content[tmp+5]])
    } 

console.log(table.toString())


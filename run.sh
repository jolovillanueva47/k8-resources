#!/bin/bash
if [ "$1" == "" ]; then
    echo "Please specify kube namespace as argument"
else
    echo "Namespace: $1"
    kubectl get pods -o=jsonpath="{range.items[*]}{.metadata.name}{','}{.metadata.namespace}{','}{.spec.containers[0].resources.requests.cpu}{','}{.spec.containers[0].resources.limits.cpu}{','}{.spec.containers[0].resources.requests.memory}{','}{.spec.containers[0].resources.limits.memory}{','}{end}" -n $1 > k8-resources.txt
    kube-resource
    rm k8-resources.txt
fi

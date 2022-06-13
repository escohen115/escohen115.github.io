var mergeTwoLists = function(l1, l2) {
    if (l1 === null){
        return l2
    }
    if (l2 === null){
        return l1
    }
    head = null
    if (l1.val <= l2.val){
        head = l1
        l1  = l1.next
    }
    else {
        head = l2
        l2 = l2.next
    }
    let p = head
    while (l1 && l2){
        if (l1.val <= l2.val){
            p.next = l1
            l1 = l1.next
        }
        else{
            p.next = l2
            l2 = l2.next
        }
    }
    if (l1){
        p.next = l1
    }
    if (l2){
        p.next = l2
    }
    return head
    
 
};
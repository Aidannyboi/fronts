class Node {
  constructor(data){
    this.data=data;
    this.next=null;
  }
}

class LinkedList {
  constuctor(head = null){
    this.head = head;
  }

  
  addFront(new_node){
    
    new_node.next = this.head;

    this.head = new_node;
    
  }

  removeFront(){

    if (this.head == null){
      return null
    }
    let removedNode = this.head;

    this.head = this.head.next
    removedNode.next = null;

    return removedNode;
  }

  front(){
    let index = this.head
    console.log(index.data)
  }
}
  const firstSll = new LinkedList();
  firstSll.addFront(new Node(5))
  console.log(firstSll);
  firstSll.addFront(new Node(10))
  console.log(firstSll.front());
  console.log(firstSll);
  firstSll.removeFront()
  console.log(firstSll);

  console.log(firstSll.front());


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let a = []
  for (let i = head.length - 1; i >= 0; i--) {
    a.push(head[i])
  } return a
};

//不能使用额外的空间


var reverseList = function (head) {
  for (let i = head.length - 1; i >= 0; i--) {
    let a = head.pop()
    let b = 0
    head[b] = a
    b++
  } return head
};

var reverseList = function(head) {

};

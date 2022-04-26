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
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head
  }
  let a = head
  let b = head.next
  let c = head.next.next

  b.next = a
  a.next = swapPairs(c)
  return b
};

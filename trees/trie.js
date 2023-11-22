/**
 * Trie data structure.
 * A trie is a tree-like data structure whose nodes store the letters of an alphabet.
 * By structuring the nodes in a particular way, words and strings can be retrieved from the structure by traversing down a branch path of the tree.
 *
 * In computer science, a trie (/ˈtriː/, /ˈtraɪ/), also called digital tree or prefix tree,[1] is a type of k-ary search tree,
 * a tree data structure used for locating specific keys from within a set. These keys are most often strings, with links between nodes defined not by the entire key, but by individual characters. In order to access a key (to recover its value, change it, or remove it), the trie is traversed depth-first, following the links between nodes, which represent each character in the key.
 *
 * Unlike a binary search tree, nodes in the trie do not store their associated key. Instead, a node's position in the trie defines the key with which it is associated. This distributes the value of each key across the data structure, and means that not every node necessarily has an associated value.
 *
 * All the children of a node have a common prefix of the string associated with that parent node, and the root is associated with the empty string. This task of storing data accessible by its prefix can be accomplished in a memory-optimized way by employing a radix tree.
 *
 * Though tries can be keyed by character strings, they need not be. The same algorithms can be adapted for ordered lists of any underlying type, e.g. permutations of digits or shapes. In particular, a bitwise trie is keyed on the individual bits making up a piece of fixed-length binary data, such as an integer or memory address. The key lookup complexity of a trie remains proportional to the key size. Specialized trie implementations such as compressed tries are used to deal with the enormous space requirement of a trie in naive implementations.
 */




/**
 * Represents a node in a Trie.
 *
 * @constructor
 * @class
 */

class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

# Inappropriate Intimacy Smell
<!-- .slide: data-state="statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" -->

------

## Smelly Code
<!-- .slide: data-title="Inappropriate Intimacy" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

<pre class="language-javascript"><code>function ShoppingCart() { this.items = []; }
ShoppingCart.prototype.addItem = function(item) {
  this.items.push(item);
};

function Product(name) { this.name = name; }
Product.prototype.addToCart = function() {
  shoppingCart.addItem(this);
};

var shoppingCart = new ShoppingCart();
var product = new Product('Socks');
product.addToCart();
console.log(shoppingCart.items);
</code></pre>

------

# Why Does This Smell?
<!-- .slide: data-title="Inappropriate Intimacy" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

## Tightly Coupled Dependencies <!-- .element class="fragment" -->

------

## Smelly Code
<!-- .slide: data-title="Inappropriate Intimacy" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

<pre class="language-javascript highlight" data-line="8"><code data-trim>function ShoppingCart() { this.items = []; }
ShoppingCart.prototype.addItem = function(item) {
  this.items.push(item);
};

function Product(name) { this.name = name; }
Product.prototype.addToCart = function() {
  shoppingCart.addItem(this);
};

var shoppingCart = new ShoppingCart();
var product = new Product('Socks');
product.addToCart();
console.log(shoppingCart.items);
</code></pre>

------

## So What!?!
<!-- .slide: data-title="Inappropriate Intimacy" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

1. Dependency Injection <!-- .element class="fragment" -->
2. Message Broker <!-- .element class="fragment" -->

------

## 1. Dependency Injection
<!-- .slide: data-title="Inappropriate Intimacy" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

<pre class="language-javascript highlight" data-line="6,8,15"><code>function ShoppingCart() { this.items = []; }
ShoppingCart.prototype.addItem = function(item) {
  this.items.push(item);
};

function Product(name, shoppingCart) {
  this.name = name;
  this.shoppingCart = shoppingCart;
}
Product.prototype.addToCart = function() {
  this.shoppingCart.addItem(this);
};

var shoppingCart = new ShoppingCart();
var product = new Product('Socks', shoppingCart);
product.addToCart();
console.log(shoppingCart.items);
</code></pre>

------

## 2. Message Broker
<!-- .slide: data-title="Inappropriate Intimacy" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

<pre class="language-javascript highlight fragment fragment--code" data-line="1,5,13"><code>var channel = postal.channel();

function ShoppingCart() {
  this.items = [];
  channel.subscribe('shoppingcart.add', this.addItem);
}
ShoppingCart.prototype.addItem = function(item) {
  this.items.push(item);
};

function Product(name) { this.name = name; }
Product.prototype.addToCart = function() {
  channel.publish('shoppingcart.add', this);
};

var shoppingCart = new ShoppingCart();
var product = new Product('Socks');
product.addToCart();
console.log(shoppingCart.items);
</code></pre>

------

# Tooling
<!-- .slide: data-title="jQuery Inquiry" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--senior" data-background="#222" -->

## Fuzzy <div class="small">(Subjective)</div>

------

## Resources
<!-- .slide: data-title="Inappropriate Intimacy" data-state="title statusLint statusLint--easy statusRule statusRule--fuzzy statusSkill statusSkill--junior" data-background="#222" -->

* [`postal`](https://github.com/postaljs/postal.js) by [@ifandelse](http://twitter.com/ifandelse)

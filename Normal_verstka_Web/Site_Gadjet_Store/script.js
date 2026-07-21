const { createApp, ref, computed } = Vue;

    createApp({
      setup() {
        const showCart = ref(false);
        const cart = ref([]);
        const activeCategory = ref('Все');
        const toast = ref({ show: false, message: '' });
        const form = ref({ name: '', email: '', message: '' });

        const categories = ['Все', 'Смартфоны', 'Наушники', 'Часы', 'Аксессуары'];

        const products = [
          { id: 1, name: 'iPhone 16 Pro', desc: 'A18 Pro, 256GB, Titanium', price: 129990, category: 'Смартфоны', image: '📱' },
          { id: 2, name: 'AirPods Pro 2', desc: 'ANC, Spatial Audio, USB-C', price: 24990, category: 'Наушники', image: '🎧' },
          { id: 3, name: 'Apple Watch Ultra 2', desc: '49mm, GPS + Cellular', price: 89990, category: 'Часы', image: '⌚' },
          { id: 4, name: 'Samsung S25 Ultra', desc: 'Snapdragon 8 Elite, 512GB', price: 119990, category: 'Смартфоны', image: '📱' },
          { id: 5, name: 'Sony WH-1000XM6', desc: 'Лучший ANC на рынке', price: 34990, category: 'Наушники', image: '🎧' },
          { id: 6, name: 'MagSafe Charger', desc: 'Беспроводная зарядка 15W', price: 4990, category: 'Аксессуары', image: '🔌' },
          { id: 7, name: 'Pixel Watch 3', desc: 'Fitbit интеграция, LTE', price: 39990, category: 'Часы', image: '⌚' },
          { id: 8, name: 'Nothing Phone (3)', desc: 'Glyph Interface, Snapdragon 8', price: 59990, category: 'Смартфоны', image: '📱' },
        ];

        const filteredProducts = computed(() => {
          if (activeCategory.value === 'Все') return products;
          return products.filter(p => p.category === activeCategory.value);
        });

        const cartTotal = computed(() => cart.value.reduce((sum, item) => sum + item.price, 0));

        function isInCart(id) {
          return cart.value.some(item => item.id === id);
        }

        function toggleCart(product) {
          if (isInCart(product.id)) {
            removeFromCart(product.id);
            showToast('Удалено из корзины');
          } else {
            cart.value.push(product);
            showToast('Добавлено в корзину');
          }
        }

        function removeFromCart(id) {
          cart.value = cart.value.filter(item => item.id !== id);
        }

        function showToast(msg) {
          toast.value = { show: true, message: msg };
          setTimeout(() => toast.value.show = false, 2000);
        }

        function scrollToProducts() {
          document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        }

        function submitForm() {
          showToast('Сообщение отправлено!');
          form.value = { name: '', email: '', message: '' };
        }

        return {
          showCart, cart, activeCategory, toast, form,
          categories, products, filteredProducts, cartTotal,
          isInCart, toggleCart, removeFromCart, scrollToProducts, submitForm
        };
      }
    }).mount('#app');
import { createWebHistory, createRouter } from "vue-router";
import Main from "./Pages/Main.vue";
import ProductDetail from "./Pages/SingleProductDetail.vue";
import Login from "./Pages/Login.vue";
import ProductIndex from "./Pages/Admin/Products/Index.vue";
import Form from "./Pages/Admin/Products/Form.vue";

const routes = [
  {
    name: "Main",
    path: "/",
    component: Main,
  },

  {
    name: "ProductDetail",
    path: "/product/:id",
    component: ProductDetail,
  },
  {
    name: "Login",
    path: "/Login",
    component: Login,
  },
  {
    name: "admin.product.index",
    path: "/admin/products",
    component: ProductIndex,
  },
  {
    name: "Form",
    path: "/admin/products/create",
    component: Form,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

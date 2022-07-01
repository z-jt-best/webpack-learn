// 导入静态资源，webpack 无法处理这些静态资源，需要额外配置 loader 来处理这些静态资源后才能交给 webpack 来处理这些静态资源后才能交给
// webpack 4 推荐使用 file-loader，webpack 5 则可以使用内置 assets/resource 来处理。
import Logo from '@/assets/images/webpack-logo.png'

const newImg = new Image()
newImg.src = Logo

const app = document.getElementById('app')
app.appendChild(newImg)

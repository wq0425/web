<template>
  <div id="App">
    <Section></Section>
    <Footer></Footer>
  </div>
</template>

<script>
import Section from "./components/Section"
import Footer from "./components/Footer"
export default {
  name: 'App',
  components: {
    Section,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: .14rem;
}

a {
  text-decoration: none;
  color: #000;
}

ul li,
ol li {
  list-style: none;
}

i,
em {
  font-style: normal;
}

b,
strong {
  font-weight: normal;
}

i {
  text-decoration: none;
}

html,
body,
#App {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#App {
  display: flex;
  flex-direction: column;
}
</style>

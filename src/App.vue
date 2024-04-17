<template>
  <div classe="container">
    <h1>Hello Bootsrap</h1>
    <div class="row">
      <div class="col-sm">
        <button class="btn btn-primary">{{ message }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Click me'
    }
  }
}
</script>

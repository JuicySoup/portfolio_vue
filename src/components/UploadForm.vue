<template>
  <div class="col-lg-6">
    <div class="card">
      <div class="card-header">
        <strong>Add Project</strong>
      </div>
      <div class="card-body">
        <form
          action=""
          method="post"
          enctype="multipart/form-data"
          class="form-horizontal"
        >
          <div class="row form-group">
            <div class="col col-md-3">
              <label for="text-input" class="form-control-label">Title</label>
            </div>
            <div class="col-12 col-md-9">
              <input
                type="text"
                id="text-input"
                name="text-input"
                class="form-control"
                v-model="title"
              />
            </div>
          </div>
          <div class="row form-group">
            <div class="col col-md-3">
              <label for="textarea-input" class="form-control-label">Project description</label >
            </div>
            <div class="col-12 col-md-9">
              <textarea
                name="textarea-input"
                id="textarea-input"
                rows="9"
                placeholder="Content..."
                class="form-control"
                v-model="desc"
              ></textarea>
            </div>
          </div>
          <div class="row form-group">
            <div class="col col-md-3">
              <label for="select" class="form-control-label">Category</label>
            </div>
            <div class="col-12 col-md-9">
              <select name="select" id="select" class="form-control" v-model="category">
                <option>Please select</option>
                <option>3D Animation</option>
                <option>3D Render</option>
                <option>Video</option>
              </select>
            </div>
          </div>

          <div class="row form-group">
            <div class="col col-md-3">
              <label for="file-input" class="form-control-label">File input</label>
            </div>
            <div class="col-12 col-md-9 form-file">
              <input
                type="file"
                id="file-input"
                name="file-input"
                class="form-control-file"
                @change="handleChange"/>
              <p v-if="fileError" class="form-error-label">{{ fileError }}</p>
              <p v-if="file" class="form-control-label">{{ file.name }}</p>
              <p v-else>Drag your file here or click in this area.</p>
            </div>
            <Progress v-if="file" :file="file" :title="{title}" :category="{category}" :description="{desc}"/>
            <div class="col col-md-3"></div>
            <div class="card-footer">
              <button type="submit" class="btn btn-primary btn-sm" @click="startProgress=true">
                <i class="fa fa-dot-circle-o"></i> Create
              </button>
              <button type="reset" class="btn btn-danger btn-sm">
                <i class="fa fa-ban"></i> Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Progress from './Progress.vue'

export default {
  components: { Progress },
  setup() {
    const file = ref(null)
    const fileError = ref(null)
     // allowed file types
    const types = ['image/png', 'image/jpeg']
    const handleChange = (e) => {
      let selected = e.target.files[0]
      console.log(selected)
      if (selected && types.includes(selected.type)) {
        file.value = selected
        fileError.value = null
      } else {
        file.value = null
        fileError.value = 'Please select an image file (png or jpg)'
      }
    }
    return { file, fileError, handleChange }
  },
  data() {
    return {
      title: '',
      category: 'Please select',
      desc: '',
      startProgress: false
    }
  }
}

</script>

<style >
form {
  margin: 30px auto 10px;
  text-align: center;
}
label {
  display: block;
  margin: 10px auto;
  line-height: 30px;
}
textarea {
  width: 300px;
  height: 250px;
}
.form-file {
  margin: auto;
  width: 500px;
  height: 200px;
  border: 4px dashed #fff;
}

.form-file input {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
}

form p {
  margin-top: -200px;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 170px;
  color: #ffffff;
  font-family: Arial;
}

form button {
  width: 150px;
  height: 30px;
  margin: 20px 15px;
  cursor: pointer;
  background: #060609;
  border: 1px solid #5ad8b2;
  border-radius: 6px;
  color: #5ad8b2;
}
form button:hover {
  background: #5ad8b2;
  color: white;
}
.card-header {
  text-align: center;
}
.form-error-label {
  color: #ff4a4a;
}
</style>
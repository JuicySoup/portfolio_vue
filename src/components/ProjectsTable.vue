<template>
<div class="main-content">
        <div class="section__content section__content--p30">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <!-- DATA TABLE -->
                        <h3 class="title-5 m-b-35">Projects</h3>
                        <div class="table-data__tool">
                            <div class="table-data__tool-left">
                                <div class="rs-select2--light rs-select2--md">
                                    <select class="js-select2" name="property">
                                        <option selected="selected">Category</option>
                                        <option value="">Option 1</option>
                                        <option value="">Option 2</option>
                                    </select>
                                    <div class="dropDownSelect2"></div>
                                </div>
                                <div class="rs-select2--light rs-select2--sm">
                                    <select class="js-select2" name="time">
                                        <option selected="selected">Today</option>
                                        <option value="">3 Days</option>
                                        <option value="">1 Week</option>
                                    </select>
                                    <div class="dropDownSelect2"></div>
                                </div>
                                <button class="au-btn-filter">
                                    <i class="zmdi zmdi-filter-list"></i>filter</button>
                            </div>
                            <div class="table-data__tool-right">
                                <button @click="addProject" class="au-btn au-btn-icon au-btn--green au-btn--small">
                                    <i class="zmdi zmdi-plus"></i>add project</button>
                                <div class="rs-select2--dark rs-select2--sm rs-select2--dark2">
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive table-responsive-data2">
                            <table class="table table-data2">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Id</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody v-if="projects">
                                    <tr v-for="project in filteredProjects" :key="project.id" class="tr-shadow">
                                        <td>{{project.title.title}}</td>
                                        <td>
                                            <span class="block-email">{{project.category.category}}</span>
                                        </td>
                                        <td>{{project.id}}</td>
                                        <td>
                                            <div class="table-data-feature">
                                                <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                                    <i class="zmdi zmdi-edit"></i>
                                                </button>
                                                <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                                    <i class="zmdi zmdi-delete"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            <!-- END DATA TABLE -->
</template>

<script>
import { useRouter } from 'vue-router'
import useCollection from "../composables/useCollection";

export default {
    setup(){
        const router = useRouter()

        const addProject = () => {
            router.push({name: 'Create'})
        }
        return { addProject }
    },
    data() {
    return {
      projects: [],
      current: "all"
    }
  },
  mounted(){
    const { documents } = useCollection("images");
    this.projects = documents;
  },
  computed: {
    filteredProjects() {
      if (this.current === 'renders'){
        return this.projects.filter(project => project.category.category === "3D Render")
      }
      if (this.current === 'animations'){
        return this.projects.filter(project => project.category .category=== "3D Animation")
      }
      if (this.current === 'videos'){
        return this.projects.filter(project => project.category.category === "Video")
      }
      return this.projects
    }
  }

}
</script>

<style scoped src="../assets/styles/theme.css">
</style>
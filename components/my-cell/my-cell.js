// components/my-cell/my-cell.js
import Toast from '/@vant/weapp/toast/toast';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    columns: Array,
    cellItem: {
      type: Object,
      value: {}
    },
   
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 弹出层
    show: false,
    currentColumn: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onConfirm(event) {
      const {
        picker,
        value,
        index
      } = event.detail;
      // Toast(`当前值：${value}, 当前索引：${index}`);

      this.setData({
        currentColumn: value
      })

      this.triggerEvent('mycellevent', value)
      this.setData({
        show: false
      })
    },

    onCancel() {
      // Toast('取消');
      this.setData({
        show: false
      })
    },
    showPopup() {
      this.setData({
        show: true
      });
    },

    onClose() {
      this.setData({
        show: false
      });
    },
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      let {
        currentColumn,
        columns
      } = this.data
      currentColumn = columns[0]
      this.setData({
        currentColumn
      })
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },


})
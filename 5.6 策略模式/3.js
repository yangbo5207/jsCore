var strategys = {
  required: function (value, rule) {
    if (value === '') {
      return rule.message || '该字段不能为空';
    }
  },
  // 限制最小长度
  min: function (value, rule) {
    if (value.length < rule.min) {
      return rule.message || `该字段最小长度为${rule.min}`;
    }
  },
  // 限制最小长度
  max: function (value, rule) {
    if (value.length > rule.max) {
      return rule.message || `该字段最大长度为${rule.max}`;
    }
  },
  // 手机号码格式
  pattern: function (value, rule) {
    if (!rule.pattern.test(value)) {
      return rule.message || '正则匹配失败';
    }
  }
};

function Validator () {
  // 格式 { username: { value: '张三', rules: [{}, {}] } }
  this.fields = {};
};

// 添加一个字段
Validator.prototype.addField = function (name, value, rules) {
  this.fields[name] = {
    value,
    rules
  }
};

// 添加多个字段
Validator.prototype.addFields = function(fields) {
  this.fields = fields
}

// 验证，并返回验证结果
Validator.prototype.validate = function() {
  // 通过的字段，与错误的字段
  const result = { fields: [], errorFields: [] }
  Object.keys(this.fields).forEach(key => {
    // 错误验证结果
    let errorMessage = ''
    const value = this.fields[key].value
    const rules = this.fields[key].rules
    
    for (var i = 0; i < rules.length; i++) {
      Object.keys(rules[i]).forEach(validateField => {
        if (strategys[validateField]) {
          const message = strategys[validateField](value, rules[i])
          if (message) {
            errorMessage = message
          }
        }
      })
      if (errorMessage) {
        break
      }
    }

    if (errorMessage) {
      result.errorFields.push({field: key, value, message: errorMessage})
    } else {
      result.fields.push({field: key, value})
    }
  })

  return result
};


// 从组件中获取到的字段内容，其中包括了具体的值，与传入的校验规则
const fields = {
  username: {
    value: '张三张三张三张三张三张三张三张三张三',
    rules: [{required: true, message: '该字段为必填'}, {max: 10}]
  },
  password: {
    value: '123',
    rules: [{required: true}, {min: 6}]
  },
  phone: {
    value: '18301022997',
    rules: [{pattern: /(^1[3|5|8][0-9]{9}$)/, message: '手机号码规则不匹配'}]
  }
}

function validate() {
  var validator = new Validator();
  validator.addFields(fields)
  const result = validator.validate()
  console.log(result)
}

validate()
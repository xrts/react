// PropTypes
// 属性接收的强校验

import PropTypes from 'prop-types';

TodoItem.propTypes = {
    test: PropTypes.string.isRequired, // isRequired 代表必须传递的值
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // string or number
    deleteItem: PropTypes.func,
    index: PropTypes.number
};


// DefaultProps
// 默认值

TodoItem.defaultProps = {
    test: 'hello word'
};


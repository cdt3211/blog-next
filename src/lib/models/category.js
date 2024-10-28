const mongoose = require('mongoose');
const { Schema } = mongoose;
import pinyin from 'pinyin';

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  postCount: {
    type: Number,
    default: 0
  }
});

categorySchema.pre('validate', function (next) {
  if (this.name) {
    // 将中文转换为拼音
    const pinyinTitle = pinyin(this.name, {
      style: pinyin.STYLE_NORMAL,
      heteronym: false
    }).flat().join('-');

    this.slug = pinyinTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  next();
})

export const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);
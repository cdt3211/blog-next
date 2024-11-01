const mongoose = require('mongoose');
const { Schema } = mongoose;
import pinyin from 'pinyin';

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  tags: [{
    type: String,
    trim: true
  }]
},
  { timestamps: true }
)

postSchema.index({ slug: 1 });

postSchema.pre('validate', function (next) {
  if (this.title) {
    // 将中文转换为拼音
    const pinyinTitle = pinyin(this.title, {
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

export const Post = mongoose.models?.Post || mongoose.model('Post', postSchema);
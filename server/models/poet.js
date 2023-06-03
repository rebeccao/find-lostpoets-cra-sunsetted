const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PoetSchema = new Schema({
  origin: { type: String, required: true, maxLength: 100 },
  origin_count: { type: Number, required: true },
  poet_id: { type: Number, required: true, min: 1, max: 28170 },
  poet_name: { type: String, required: true, maxLength: 100 },
  owner_username: { type: String, required: true },
  owner_address: { type: String, required: true },
  prime: { type: Number, required: true },
  influence: { type: String, required: true },
  latent: { type: String, required: true },
  latent_count: { type: Number, required:true },
  breed: { type: String, required: true },
  breed_count: { type: Number, required:true },
  age: { type: String, required: true },
  age_count: { type: Number, required:true },
  genre: { type: String, required: true },
  genre_count: { type: Number, required:true },
  polarity: { type: String, required: true },
  polarity_count: { type: Number, required:true },
  ego: { type: String, required: true },
  ego_count: { type: Number, required:true },
  word_count: { type: Number, required: true },
  lexicon_count: { type: Number, required: true },
  rewrites: { type: Number, required: true },
  named: { type: Boolean, required: true },
  poem: { type: String, required: true },
  gen1_image_url: { type: String, required: true },
  gen0_image_url: { type: String, required: true },
  gen0_thumbnail_url: { type: String, required: true },
});


// Export model
module.exports = mongoose.model("Poet", PoetSchema);

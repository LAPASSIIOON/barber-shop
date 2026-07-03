// Each transformation has a before (messy/unstyled) and after (finished result)
import fadeBefore from '../../assets/images/transformations/fade-before.webp'
import fadeAfter from '../../assets/images/transformations/fade-after.webp'
import beardBefore from '../../assets/images/transformations/beard-before.webp'
import beardAfter from '../../assets/images/transformations/beard-after.webp'
import pompadourBefore from '../../assets/images/transformations/pompadour-before.webp'
import pompadourAfter from '../../assets/images/transformations/pompadour-after.webp'
import shaveBefore from '../../assets/images/transformations/shave-before.webp'
import shaveAfter from '../../assets/images/transformations/shave-after.webp'

const TRANSFORMATION_IMAGES = {
  fade: { before: fadeBefore, after: fadeAfter },
  beard: { before: beardBefore, after: beardAfter },
  pompadour: { before: pompadourBefore, after: pompadourAfter },
  shave: { before: shaveBefore, after: shaveAfter },
}

export default TRANSFORMATION_IMAGES

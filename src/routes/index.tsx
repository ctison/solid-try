import { Devices } from '~/components/Devices'
import { Keyboard } from '~/components/Keyboard'
import { MadeWith } from '~/components/MadeWith'
import { StaggeredTiles } from '~/components/StaggeredTiles'

export default function () {
  return (
    <>
      <Keyboard />
      <StaggeredTiles />
      <MadeWith />
      <Devices />
    </>
  )
}

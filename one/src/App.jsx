
const componentGenerator = new Proxy({}, {
  get: (target, name) => (props) => (
    <div className="component">
      Hello, I am a <b>{name}</b> component!
    </div>
  )
})

const { Potato, Spaghetti, Raviolli, ಢ_ಢ } = componentGenerator

export default () => (
  <main className="container">
    <h1>Component generator using Proxies</h1>
    <Potato />
    <Spaghetti />
    <Raviolli />
    <ಢ_ಢ />
  </main>
)
